import Login from "../components/Login/Login";

function SignIn() {
  return (
    <section className="h-full flex items-center justify-center py-8">
      <div className="container px-4 md:px-0 md:w-3/4 lg:w-1/2 mx-auto py-12">
        <h1 className="text-xl">Login :</h1>
        <Login />
      </div>
    </section>
  );
}

export default SignIn;
