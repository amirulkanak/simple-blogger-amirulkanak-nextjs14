import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

const ProfileLayout = async ({ children }) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    return redirect('/api/auth/login?');
  }

  return <section>{children}</section>;
};

export default ProfileLayout;
