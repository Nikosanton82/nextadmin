import styles from "../../../../app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        IPhone
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="IPhone 15 Pro Max" />
          <label>Price</label>
          <input type="number" name="price" placeholder="$1342" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="72" />
          <label>Color</label>
          <input type="text" name="color" placeholder="Red" />
          <label>Size</label>
          <textarea type="text" name="size" placeholder="xl" />
          <label>Category</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder="Description"
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
