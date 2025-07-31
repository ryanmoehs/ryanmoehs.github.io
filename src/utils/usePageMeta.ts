import { useLocation } from 'react-router';
import { pageMeta } from './pageMeta';

export function usePageMeta() {
  const location = useLocation();
  const meta = pageMeta[location.pathname] || { title: '', description: '' };
  return meta;
}
