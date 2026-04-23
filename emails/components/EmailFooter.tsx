import { Hr, Section, Text } from '@react-email/components'

export function EmailFooter() {
  return (
    <Section style={styles.wrapper}>
      <Hr style={styles.hr} />
      <Text style={styles.company}>MB Holding (Maître Bâtisseur)</Text>
      <Text style={styles.info}>Dakar Plateau, Sénégal</Text>
      <Text style={styles.info}>+221 77 128 58 87 · +221 787 89 19 60</Text>
      <Text style={styles.info}>mbholding221@gmail.com</Text>
      <Text style={styles.copy}>© {new Date().getFullYear()} MB Holding. Tous droits réservés.</Text>
    </Section>
  )
}

const styles = {
  wrapper: {
    backgroundColor: '#f0f1f8',
    padding: '32px 40px',
    textAlign: 'center' as const,
  },
  hr: {
    borderColor: '#e0e2ef',
    margin: '0 0 24px 0',
  },
  company: {
    color: '#1c1d2e',
    fontFamily: "'Space Grotesk', Arial, sans-serif",
    fontSize: '13px',
    fontWeight: '700',
    letterSpacing: '0.05em',
    margin: '0 0 8px 0',
  },
  info: {
    color: '#44475f',
    fontFamily: "'Work Sans', Arial, sans-serif",
    fontSize: '11px',
    margin: '0 0 4px 0',
  },
  copy: {
    color: '#757c7d',
    fontFamily: "'Work Sans', Arial, sans-serif",
    fontSize: '10px',
    letterSpacing: '0.1em',
    margin: '16px 0 0 0',
  },
}
