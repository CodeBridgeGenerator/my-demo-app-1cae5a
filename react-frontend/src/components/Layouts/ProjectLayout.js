import AppSideBar from "./appSideBar/AppSideBar.js";

/*

import ProductsPage from "../ProductsPage/ProductsPage";
import TeachersPage from "../TeachersPage/TeachersPage";
import StudentsGradesPage from "../StudentsGradesPage/StudentsGradesPage";
import SubjectsPage from "../SubjectsPage/SubjectsPage";
import ClassesPage from "../ClassesPage/ClassesPage";
import PetsPage from "../PetsPage/PetsPage";
~cb-add-import~

~cb-add-services-card~

case "products":
                return <ProductsPage />;
case "teachers":
                return <TeachersPage />;
case "studentsGrades":
                return <StudentsGradesPage />;
case "subjects":
                return <SubjectsPage />;
case "classes":
                return <ClassesPage />;
case "pets":
                return <PetsPage />;
~cb-add-thurthy~

*/

const AppLayout = (props) => {
  const { children, activeKey, activeDropdown } = props;

  return (
    <div className="flex min-h-[calc(100vh-5rem)] mt-20 bg-white">
      <AppSideBar activeKey={activeKey} activeDropdown={activeDropdown} />
      <div className="flex-1 ml-2">{children}</div>
    </div>
  );
};

export default AppLayout;
