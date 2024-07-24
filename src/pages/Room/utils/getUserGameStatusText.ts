import { GameUserStatus } from "src/interfaces/allTypes";

export default (status: keyof typeof GameUserStatus) => {
	switch (status) {
		case "WAITING":
			return "Ожидает";
		case "READY":
			return "Готов";
		case "CHOOSING_ANSWER":
			return "Выбирает ответ";
		case "CHOOSING_QUESTION":
			return "Выбирает вопрос";
		case "CHOOSING_BEST_ANSWER":
			return "Выбирает лучший ответ";
	}
};
