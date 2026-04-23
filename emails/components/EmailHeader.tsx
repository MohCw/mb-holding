import { Img, Section, Text } from '@react-email/components'

export function EmailHeader() {
  return (
    <Section style={styles.wrapper}>
      <Text style={styles.logo}>MB HOLDING</Text>
      <Text style={styles.tagline}>MAÎTRE BÂTISSEUR · DAKAR, SÉNÉGAL</Text>
    </Section>
  )
}

const styles = {
  wrapper: {
    backgroundColor: '#565b87',
    padding: '32px 40px',
    textAlign: 'center' as const,
  },
  logo: {
    color: '#ffffff',
    fontFamily: "'Space Grotesk', Arial, sans-serif",
    fontSize: '22px',
    fontWeight: '900',
    letterSpacing: '0.15em',
    margin: '0 0 4px 0',
  },
  tagline: {
    color: 'rgba(255,255,255,0.6)',
    fontFamily: "'Work Sans', Arial, sans-serif",
    fontSize: '9px',
    fontWeight: '600',
    letterSpacing: '0.3em',
    margin: '0',
  },
}
