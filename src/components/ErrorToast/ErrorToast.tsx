import React, { FC } from "react";

import { useSnackbar } from "notistack";
import eventEmitter from "src/services/eventEmitter/eventEmitter";
import Events from "src/services/eventEmitter/events";

interface IErrorToast {}

const ErrorToast: FC<IErrorToast> = () => {
	const { enqueueSnackbar } = useSnackbar();

	React.useEffect(() => {
		eventEmitter.addListener(Events.apiError, (data) => {
			enqueueSnackbar(data.msg, { variant: "error" });
		});
	}, []);

	return null;
};

export default ErrorToast;
