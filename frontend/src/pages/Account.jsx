import { useAuth } from "../context/AuthContext";

const Account = () => {
  const { user } = useAuth();

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-5 py-16 md:px-8">
      <p className="font-modern text-xs uppercase tracking-[0.25em] text-neutral-500">
        Account
      </p>

      <h1 className="mt-3 font-display text-5xl">
        Hey, {user?.name}
      </h1>

      <p className="mt-4 text-sm text-neutral-500">
        {user?.email}
      </p>
    </main>
  );
};

export default Account;