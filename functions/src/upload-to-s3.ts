export const handler = async (event: any = {}): Promise<any> => {
  console.log("Hello World!");
  return JSON.stringify(event, null, 2);
};
