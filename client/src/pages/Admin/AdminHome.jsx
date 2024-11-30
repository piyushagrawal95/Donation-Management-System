import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Layout>
      <div className="container">
        <div className="d-flex flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
            As an administrator, you have full access to manage the Blood Bank
            system. This includes overseeing inventory, managing donor records,
            and ensuring smooth operations of blood donations. You can add new
            blood records, track available units, and manage blood requests for
            various hospitals and clinics.
          </p>
          <p>
            The Blood Bank App is designed to help you efficiently manage and
            track blood donations and inventory. You can perform key actions such
            as adding new blood types, updating quantities, and generating reports
            for tracking usage and stock levels.
          </p>
          <p>
            Your role ensures that the organization operates efficiently, and
            that life-saving blood donations are handled with care and accuracy.
            The app will assist in making data-driven decisions to ensure the
            timely delivery and availability of blood for those in need.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
