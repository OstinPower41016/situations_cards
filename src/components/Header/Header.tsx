import React, { FC } from "react";

import { AppBar, Button, CircularProgress, TextField, Toolbar } from "@mui/material";
import { useSnackbar } from "notistack";
import { useMutation, useQuery } from "react-query";
import { getUserMeApi, updateUserApi } from "src/api/api.user";
import QueriesKeys from "src/constants/queriesKeys";
import styled from "styled-components";

interface IHeader {}

const Header: FC<IHeader> = () => {
	const [nickName, setNickName] = React.useState("");
	const { enqueueSnackbar } = useSnackbar();

	const [updateUserErrorMsg, setUpdateUserErrorMsg] = React.useState<string>();

	const userMe = useQuery({
		queryFn: getUserMeApi,
		queryKey: [QueriesKeys.userMe],
		onSuccess: (data) => {
			setNickName(data.nickname);
			return data;
		},
	});

	const updateUser = useMutation({
		mutationFn: updateUserApi,
		onSuccess: () => {
			userMe.refetch();
			enqueueSnackbar("Никнейм успешно обновлен", { variant: "success" });
		},
		onError: (error) => {
			// @ts-ignore
			setUpdateUserErrorMsg(error?.response?.data?.message);
		},
	});

	const clearErrorMsg = () => {
		setUpdateUserErrorMsg(undefined);
	};

	const onUpdateUserNickName = () => {
		if (nickName === userMe.data?.nickname || !userMe.data?.nickname || updateUserErrorMsg) {
			return;
		}

		updateUser.mutateAsync({ body: { nickname: nickName } });
	};

	const getInputHelperText = () => {
		if (updateUserErrorMsg) {
			return updateUserErrorMsg;
		}

		if (userMe.data?.guest) {
			return "Вы авторизованны как гость";
		}
	};

	return (
		<AppBar color="transparent">
			<Toolbar style={{ paddingTop: "10px", paddingBottom: "10px" }}>
				<Container>
					{userMe.data?.guest && (
						<NicknameContainer>
							<TextField
								id="standard-helperText"
								label="Никнейм"
								value={nickName}
								onChange={(e) => setNickName(e.target.value)}
								helperText={getInputHelperText()}
								variant="standard"
								error={!!updateUserErrorMsg}
								focused
								onBlur={onUpdateUserNickName}
								onInput={clearErrorMsg}
							/>
							{updateUser.isLoading && <CircularProgress size={18} style={{ marginBottom: "10px" }} />}
						</NicknameContainer>
					)}
					<Button>Войти</Button>
				</Container>
			</Toolbar>
		</AppBar>
	);
};

export default Header;

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	width: 100%;
	gap: 16px;
`;

const NicknameContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;
`;
