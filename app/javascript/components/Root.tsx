import * as Sentry from "@sentry/react";
import { type PropsWithChildren, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Text, Center, MantineProvider, Stack, Title, type MantineProviderProps, Container } from '@mantine/core';
import { CodeHighlightAdapterProvider, createShikiAdapter } from '@mantine/code-highlight';
import { ModalsProvider } from "@mantine/modals";
import highlighter from "@/lib/shiki";

const shikiAdapter = createShikiAdapter(async () => highlighter);

function FallbackComponent() {
  const { t: tLayouts } = useTranslation("layouts");
  return (
    <Container>
      <Center h="100vh">
        <Stack align="center">
          <Title order={1}>{tLayouts('web.root.fallback.header')}</Title>
          <Text>{tLayouts('web.root.fallback.description')}</Text>
        </Stack>
      </Center>
    </Container>
  );
}

type Props = PropsWithChildren & {
  // locale: Locale;
  // suffix: string | null
}

const theme: MantineProviderProps["theme"] = {
  components: {
    Anchor: {
      defaultProps: { c: 'dark' },
    },
  },
}

function Root(props: Props) {
  const { t: tCommon } = useTranslation("common");

  useEffect(() => {
    const interfaceTranslations = tCommon("sentryFeedbackWidget", { returnObjects: true, defaultValue: {} })
    Sentry.getFeedback()?.createWidget({
      triggerLabel: "", // NOTE: убираем текст с кнопки для всех локалей
      ...interfaceTranslations,
    });
  }, [tCommon]);

  return (
    <MantineProvider theme={theme}>
      <ModalsProvider>
        <CodeHighlightAdapterProvider adapter={shikiAdapter}>
          <Sentry.ErrorBoundary fallback={FallbackComponent} showDialog>
            {props.children}
          </Sentry.ErrorBoundary>
        </CodeHighlightAdapterProvider>
      </ModalsProvider>
    </MantineProvider>
  );
}

export default Sentry.withProfiler(Root);
