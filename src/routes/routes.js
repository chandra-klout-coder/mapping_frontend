import Dashboard from "../layouts/admin/Dashboard";
import Profile from "../layouts/admin/Profile";

import Blank from "../layouts/admin/Blank";
import Settings from "../layouts/admin/Settings";

import Faqs from "../layouts/admin/Faqs";
import ChangePassword from "../layouts/admin/ChangePassword";

import AddCompany from "../layouts/admin/AddCompany";
import AddIndustry from "../layouts/admin/AddIndustry";
import AddJobTitle from "../layouts/admin/AddJobTitle";
import AddCountry from "../layouts/admin/AddCountry";

import Page404 from "../errors/Page404";
import Page404Dashboard from "../errors/Page404Dashboard";
import AddState from "../layouts/admin/AddState";
import AddCity from "../layouts/admin/AddCity";
import AddSkills from "../layouts/admin/AddSkills";
import AllIndustries from "../layouts/admin/AllIndustries";
import AllCompanies from "../layouts/admin/AllCompanies";
import AllStates from "../layouts/admin/AllStates";
import AllCountries from "../layouts/admin/AllCountries";
import AllCities from "../layouts/admin/AllCities";
import AllJobTitles from "../layouts/admin/AllJobTitles";
import MapIndustry from "../layouts/admin/MapIndustry";
import MapCompany from "../layouts/admin/MapCompany";
import MapJobTitle from "../layouts/admin/MapJobTitle";
import MapCountry from "../layouts/admin/MapCountry";
import MapState from "../layouts/admin/MapState";
import MapCity from "../layouts/admin/MapCity";
import EditIndustry from "../layouts/admin/EditIndustry";
import EditCompany from "../layouts/admin/EditCompany";
import EditJobTitle from "../layouts/admin/EditJobTitle";
import EditCountry from "../layouts/admin/EditCountry";
import EditState from "../layouts/admin/EditState";
import EditCity from "../layouts/admin/EditCity";
import AddJobTitles from "../layouts/admin/AddJobTitles";

const routes = [
  { path: "/admin", exact: true, name: "Admin", component: Dashboard },
  {
    path: "/admin/dashboard",
    exact: true,
    name: "Dashboard",
    component: Dashboard,
  },
  { path: "/admin/profile", exact: true, name: "Profile", component: Profile },
  {
    path: "/admin/change-password",
    exact: true,
    name: "ChangePassword",
    component: ChangePassword,
  },
  //Mapping - Industry
  {
    path: "/admin/all-industries",
    exact: true,
    name: "AllIndustries",
    component: AllIndustries,
  },
  {
    path: "/admin/add-industry",
    exact: true,
    name: "AddIndustry",
    component: AddIndustry,
  },
  {
    path: "/admin/edit-industry/:id",
    exact: true,
    name: "EditIndustry",
    component: EditIndustry,
  },
  {
    path: "/admin/map-industry",
    exact: true,
    name: "MapIndustry",
    component: MapIndustry,
  },
  //Mapping - Company
  {
    path: "/admin/all-companies",
    exact: true,
    name: "AllCompanies",
    component: AllCompanies,
  },
  {
    path: "/admin/add-company",
    exact: true,
    name: "AddCompany",
    component: AddCompany,
  },
  {
    path: "/admin/edit-company/:id",
    exact: true,
    name: "EditCompany",
    component: EditCompany,
  },
  {
    path: "/admin/map-company",
    exact: true,
    name: "MapCompany",
    component: MapCompany,
  },

  //Mapping - Job Title
  {
    path: "/admin/all-job-titles",
    exact: true,
    name: "AllJobTitles",
    component: AllJobTitles,
  },
  {
    path: "/admin/add-job-title",
    exact: true,
    name: "AddJobTitles",
    component: AddJobTitles,
  },
  {
    path: "/admin/edit-job-title/:id",
    exact: true,
    name: "EditJobTitle",
    component: EditJobTitle,
  },
  {
    path: "/admin/map-job-title",
    exact: true,
    name: "MapJobTitle",
    component: MapJobTitle,
  },
  //Mapping - Country

  {
    path: "/admin/all-countries",
    exact: true,
    name: "AllCountries",
    component: AllCountries,
  },
  {
    path: "/admin/add-country",
    exact: true,
    name: "AddCountry",
    component: AddCountry,
  },
  {
    path: "/admin/edit-country/:id",
    exact: true,
    name: "EditCountry",
    component: EditCountry,
  },
  {
    path: "/admin/map-country",
    exact: true,
    name: "MapCountry",
    component: MapCountry,
  },

  //Mapping - State
  {
    path: "/admin/all-states",
    exact: true,
    name: "AllStates",
    component: AllStates,
  },
  {
    path: "/admin/add-state",
    exact: true,
    name: "AddState",
    component: AddState,
  },
  {
    path: "/admin/edit-state/:id",
    exact: true,
    name: "EditState",
    component: EditState,
  },
  {
    path: "/admin/map-state",
    exact: true,
    name: "MapState",
    component: MapState,
  },

  //Mapping - City

  {
    path: "/admin/all-cities",
    exact: true,
    name: "AllCities",
    component: AllCities,
  },
  {
    path: "/admin/add-city",
    exact: true,
    name: "AddCity",
    component: AddCity,
  },
  {
    path: "/admin/edit-city/:id",
    exact: true,
    name: "EditCity",
    component: EditCity,
  },
  {
    path: "/admin/map-city",
    exact: true,
    name: "MapCity",
    component: MapCity,
  },

  {
    path: "/admin/add-skills",
    exact: true,
    name: "AddSkills",
    component: AddSkills,
  },


  { path: "/admin/faqs", exact: true, name: "Faqs", component: Faqs },
  {
    path: "/admin/settings",
    exact: true,
    name: "Settings",
    component: Settings,
  },
  {
    path: "/admin/blank",
    exact: true,
    name: "Blank",
    component: Blank,
  },
  {
    path: "/admin/404",
    exact: true,
    name: "Page404",
    component: Page404Dashboard,
  },
];

export default routes;
