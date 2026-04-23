import { Body, Container, Html, Preview, Section, Text } from '@react-email/components'
import { EmailHeader } from '@/emails/components/EmailHeader'
import { EmailFooter } from '@/emails/components/EmailFooter'
import type { ContactFormData } from '@/lib/validations/contact.schema'

type Props = Omit<ContactFormData, 'turnstileToken'>

export function ContactEmail({ nom, email, sujet, message }: Props) {
  return (
    <Html lang="fr">
      <Preview>Nouveau message de {nom} — {sujet}</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <EmailHeader />

          <Section style={styles.content}>
            <Text style={styles.label}>NOUVEAU MESSAGE VIA LE SITE</Text>
            <Text style={styles.title}>{sujet}</Text>

            <Section style={styles.metaBox}>
              <Text style={styles.metaRow}>
                <span style={styles.metaKey}>De</span>{' '}
                <span style={styles.metaValue}>{nom}</span>
              </Text>
              <Text style={styles.metaRow}>
                <span style={styles.metaKey}>Email</span>{' '}
                <span style={styles.metaValue}>{email}</span>
              </Text>
            </Section>

            <Text style={styles.sectionLabel}>MESSAGE</Text>
            <Section style={styles.messageBox}>
              <Text style={styles.messageText}>{message}</Text>
            </Section>

            <Text style={styles.replyHint}>
              Répondez directement à cet email pour contacter {nom}.
            </Text>
          </Section>

          <EmailFooter />
        </Container>
      </Body>
    </Html>
  )
}

const styles = {
  body: {
    backgroundColor: '#e0e2ef',
    fontFamily: "'Work Sans', Arial, sans-serif",
  },
  container: {
    maxWidth: '600px',
    margin: '40px auto',
    backgroundColor: '#ffffff',
  },
  content: {
    padding: '40px',
  },
  label: {
    color: '#565b87',
    fontSize: '9px',
    fontWeight: '700',
    letterSpacing: '0.4em',
    margin: '0 0 12px 0',
  },
  title: {
    color: '#1c1d2e',
    fontFamily: "'Space Grotesk', Arial, sans-serif",
    fontSize: '24px',
    fontWeight: '900',
    letterSpacing: '-0.02em',
    margin: '0 0 32px 0',
  },
  metaBox: {
    backgroundColor: '#f0f1f8',
    padding: '20px 24px',
    marginBottom: '32px',
  },
  metaRow: {
    fontSize: '13px',
    margin: '0 0 6px 0',
    color: '#1c1d2e',
  },
  metaKey: {
    color: '#757c7d',
    fontSize: '10px',
    fontWeight: '700',
    letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
    marginRight: '8px',
  },
  metaValue: {
    color: '#1c1d2e',
    fontWeight: '600',
  },
  sectionLabel: {
    color: '#757c7d',
    fontSize: '10px',
    fontWeight: '700',
    letterSpacing: '0.3em',
    margin: '0 0 12px 0',
  },
  messageBox: {
    borderLeft: '3px solid #565b87',
    paddingLeft: '20px',
    marginBottom: '32px',
  },
  messageText: {
    color: '#44475f',
    fontSize: '15px',
    lineHeight: '1.7',
    margin: '0',
    whiteSpace: 'pre-wrap' as const,
  },
  replyHint: {
    color: '#757c7d',
    fontSize: '11px',
    fontStyle: 'italic',
    margin: '0',
  },
}
