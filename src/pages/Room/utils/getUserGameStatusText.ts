import { GameUserStatus } from "src/interfaces/allTypes";

export default (status: keyof typeof GameUserStatus) => {
	switch (status) {
		case "THINKING":
			return "Думает";
		case "READY":
			return "Готов";
	}
};
