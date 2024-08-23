// import { updateUser } from "@/app/lib/actions";
// import { fetchUser } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

export async function generateStaticParams() {
  // Fetch or define the list of IDs for the dynamic routes
  const ids = ['1', '2', '3']; // Replace with your actual logic to get IDs

  return ids.map(id => ({ id }));
}

const SingleProductPage = async () => {
  
  // const { id } = params;
  // const user = await fetchUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={"./noavatar.png"} alt="" fill />
        </div>
        Samsung
      </div>
      <div className={styles.formContainer}>
        <form action="#" className={styles.form}>
          <input type="hidden" name="id" value="{user.id}"/>
          <label>Title</label>
          <input type="text" name="title" placeholder="{user.username}" />
          <label>Price</label>
          <input type="number" name="price" placeholder="34" />
          <label>Stock</label>
          <input type="number" name="stock" />
          <label>Color</label>
          <input type="text" name="color" placeholder="red" />
          <label>Size</label>
          <textarea type="text" name="size" placeholder="{user.address}" />
          <label>Category</label>
          <select name="cat" id="isAdmin">
            <option 
            value="kitchen" 
            // selected={user.isAdmin}
            >
                kitchen
            </option>
            <option 
            value="computers" 
            // selected={!user.isAdmin}
            >
                computers
            </option>
          </select>
          <label>Description</label>
          <textarea type="text" id="desc" name="description" rows="10" placeholder="description" />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;