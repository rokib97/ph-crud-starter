import { Route, Routes } from "react-router-dom";
import AddStudent from "../components/AddStudent";
import StudentTable from "../components/AllStudent";
import Banner from "../components/Banner";
import EditStudent from "../components/EditStudent";
import Root from "../layouts/Root";

export default function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Banner />} />
        <Route path="/all-student" element={<StudentTable />} />
        <Route path="/students/:studentId" element={<EditStudent />} />
        <Route path="/add-student" element={<AddStudent />} />
      </Route>
    </Routes>
  );
}
