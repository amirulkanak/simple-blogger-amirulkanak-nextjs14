import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

const ProfilePage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <section className="flex items-center justify-center mt-20">
      <h1 className="bg-gradient-to-r from-yellow-600 to-red-600 text-4xl font-black bg-clip-text text-transparent">
        Hi {user?.given_name}, Welcome to your profile
      </h1>
    </section>
  );
};

export default ProfilePage;
