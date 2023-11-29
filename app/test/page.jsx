const page = () => {
  const handleAction = async (formData) => {
    "use server";
    console.log(formData);
    const username = formData.get("username");
    console.log("Hello", username);
  };
  return (
    <div>
      <form action={handleAction}>
        <input type="text" name="username" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default page;
