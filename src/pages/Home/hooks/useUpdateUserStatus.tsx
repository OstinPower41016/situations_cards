import React from "react";
import { useMutation, useQuery } from "react-query";
import { getUserMeApi, updateUserApi } from "src/api/api.user";
import QueriesKeys from "src/constants/queriesKeys";
import { UserStatus } from "src/interfaces/allTypes";

const useUpdateUserStatus = () => {
	const userMe = useQuery({
		queryFn: getUserMeApi,
		queryKey: [QueriesKeys.userMe],
	});

	const updateUser = useMutation({
		mutationFn: updateUserApi,
	});

	React.useEffect(() => {
		if (userMe.data?.status !== UserStatus.ONLINE) {
			updateUser.mutateAsync({ body: { status: UserStatus.ONLINE } });
		}
	}, [userMe.data]);

	return [];
};

export default useUpdateUserStatus;
