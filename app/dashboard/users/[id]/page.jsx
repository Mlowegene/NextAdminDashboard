// import { updateUser } from "@/app/lib/actions";
// import { fetchUser } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

export async function generateStaticParams() {
  // Fetch or define the list of IDs for the dynamic routes
  const ids = ['1', '2', '3']; // Replace with your actual logic to get IDs

  return ids.map(id => ({ id }));
}

const SingleUserPage = async ({ params }) => {
  const { id } = params;
  // const user = await fetchUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={"./noavatar.png"} alt="" fill />
        </div>
        mlowe
      </div>
      <div className={styles.formContainer}>
        <form action="#" className={styles.form}>
          <input type="hidden" name="id" value="{user.id}" />
          <label>Username</label>
          <input type="text" name="username" placeholder="{user.username}" />
          <label>Email</label>
          <input type="email" name="email" placeholder="{user.email}" />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder="{user.phone}" />
          <label>Address</label>
          <textarea type="text" name="address" placeholder="{user.address}" />
          <label>Is Admin?</label>
          <select name="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;