import { signIn } from '@logto/next/server-actions';
import { logtoConfig } from '@/app/logto-config';

export async function GET() {
  return signIn(logtoConfig);
}
