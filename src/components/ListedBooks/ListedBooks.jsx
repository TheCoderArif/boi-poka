import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadBooks from "../ReadBooks/ReadBooks";
import WishList from "../WishList/WishList";

const ListedBooks = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>

          <h2>Read Books</h2>
          <ReadBooks></ReadBooks>

        </TabPanel>
        <TabPanel>

          <h2>Wishlist books</h2>
          <WishList></WishList>

        </TabPanel>
      </Tabs>
      
    </div>
  );
};

export default ListedBooks;
