import Chat from "../../features/chats/ui/pages/Chat";
import Attendence from "../../features/employee module/attendence/ui/pages/Attendence";
import MyTask from "../../features/employee module/Mytask/ui/pages/Mytask";
import Profile from "../../features/employee module/profile/ui/pages/Profile";

export let employeeRoutes = [
  {
    path: "myTask",
    element: <MyTask />,
  },
  {
    path: "chat",
    element: <Chat />,
  },
  {
    path: "attendence",
    element: <Attendence />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
];
