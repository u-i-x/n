import { logtoConfig } from '@/app/logto-config';
import { signOut } from '@logto/next/server-actions';

export async function GET() {
  return signOut(logtoConfig);
}
