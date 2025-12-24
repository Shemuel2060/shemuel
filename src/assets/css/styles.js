

const styles = {
  app: {
    minHeight: '100vh',
    backgroundColor: '#000',
    padding: '2rem',
  },
  navigation: {
    position: 'fixed',
    top: 0,
    right: 0,
    padding: '2rem',
    zIndex: 50,
  },
  navList: {
    display: 'flex',
    gap: '2rem',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navLink: {
    color: '#9ca3af',
    textDecoration: 'none',
    fontSize: '0.875rem',
    fontWeight: 500,
    transition: 'color 0.3s',
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    paddingTop: '5rem',
  },
  sidebar: {
    width: '100%',
  },
  profileCard: {
    backgroundColor: '#18181b',
    borderRadius: '1rem',
    padding: '2rem',
    textAlign: 'center',
  },
  profileAvatar: {
    width: '8rem',
    height: '8rem',
    margin: '0 auto 1.5rem',
    background: 'linear-gradient(to bottom right, #eab308, #f97316)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarEmoji: {
    fontSize: '4rem',
  },
  profileName: {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  profileTitle: {
    color: '#9ca3af',
    fontSize: '0.875rem',
    marginBottom: '2rem',
  },
  profileInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    textAlign: 'left',
  },
  infoItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    padding: '1rem',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: '0.5rem',
  },
  infoIcon: {
    marginTop: '0.25rem',
  },
  infoContent: {
    flex: 1,
  },
  infoLabel: {
    color: '#6b7280',
    fontSize: '0.75rem',
    marginBottom: '0.25rem',
  },
  infoValue: {
    color: '#d1d5db',
    fontSize: '0.875rem',
  },
  mainContent: {
    backgroundColor: '#18181b',
    borderRadius: '1rem',
    padding: '3rem',
    gridColumn: 'span 2',
  },
  section: {
    marginBottom: '3rem',
  },
  sectionTitle: {
    color: 'white',
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  titleUnderline: {
    width: '3rem',
    height: '0.25rem',
    backgroundColor: '#eab308',
    marginBottom: '1.5rem',
  },
  aboutContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    color: '#9ca3af',
    lineHeight: 1.75,
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
  },
  serviceCard: {
    backgroundColor: '#18181b',
    border: '1px solid #27272a',
    borderRadius: '0.75rem',
    padding: '1.5rem',
    transition: 'background-color 0.3s',
    cursor: 'pointer',
  },
  serviceIcon: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  serviceTitle: {
    color: 'white',
    fontSize: '1.125rem',
    fontWeight: 600,
    marginBottom: '0.5rem',
  },
  serviceDescription: {
    color: '#9ca3af',
    fontSize: '0.875rem',
    lineHeight: 1.6,
  },
};

export default styles;