import { MODELS } from "../Config/Models";
export const getModelConfig = name => {
  return MODELS.find(model => model.name === name);
};
