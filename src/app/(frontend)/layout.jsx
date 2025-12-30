// Header and Footer are now in root layout.js outside main tag
// This layout only wraps page content

export default function FrontendLayout({ children }) {
  return <>{children}</>;
}
