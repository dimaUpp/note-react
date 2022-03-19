import { ReactElement } from 'react';
import './index.less';
import logoImg from '@/assets/logo.png';

export default function Layout({ page, full = false }: LayoutProps) {
  let contentClassName = 'page-layout-content';
  if (full) {
    contentClassName = `${contentClassName} is-full`;
  }
  return (
    <div className="page-layout">
      <div className="page-layout-header">
        <img src={logoImg} alt="logo" className="layout-header-logo" />
        <div className="layout-header-info">info</div>
      </div>
      <div className={contentClassName}>{page}</div>
    </div>
  );
}

interface LayoutProps {
  page: ReactElement;
  full?: boolean;
}