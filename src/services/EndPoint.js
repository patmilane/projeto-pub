import Api from "./Api";

export const getListBebida = async () => {
  try{
    return await Api.get(`bebida`);
  } catch (error) {
    console.log("Erro ao tentar obter a lista de bebidas.", error);
  } 
};

export const getListUsuario = async () => {
  try{
    return await Api.get(`usuario`);
  } catch (error) {
    console.log("Erro ao tentar obter a lista de usuarios.", error);
  } 
};

export const getListPetiscos  = async () => {
  try{
    return await Api.get(`petiscos`);
  } catch (error) {
    console.log("Erro ao tentar obter a lista de petiscos.", error);
  } 
};

export const getListIngresso = async () => {
  try{
    return await Api.get(`ingresso`);
  } catch (error) {
    console.log("Erro ao tentar obter a lista de ingressos.", error);
  } 
};
