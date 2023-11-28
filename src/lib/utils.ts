export const convertCamelCaseToSentence = (camelCase: string): string =>
	camelCase.replace(/([A-Z])/g, ' $1').trim();
