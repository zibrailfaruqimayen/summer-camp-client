import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useInstructors = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  // use axios secure with react query
  const { data: isInstructors, isLoading: isInstructorsLoading } = useQuery({
    queryKey: ["isInstructors", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/instructor/${user?.email}`);

      return res.data.instructors;
    },
  });
  return [isInstructors, isInstructorsLoading];
};

export default useInstructors;
