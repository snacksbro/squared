import http from "../../services/general/httpService";
import apiEndpoint from "../../constants/config.json";

export function GetTutorialByTitle(tutorialTitle) {
	const fullApiEndpoint =
		apiEndpoint.apiEndpoint + "/find_tutorial_by_title/" + tutorialTitle;
	return http.get(fullApiEndpoint);
}


export function fetchAllTutorials() {
	const fullApiEndpoint = apiEndpoint.apiEndpoint + "/find_all_tutorials";
	return http.get(fullApiEndpoint);
}