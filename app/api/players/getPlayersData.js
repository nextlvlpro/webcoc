
const { default: axiosInstance } = require("@/app/apiUtils/axiosInstance");

export async function getTopPlayers(limit, region) {
    
  try {
    let {data:{items}} = await axiosInstance.get(`/locations/${region}/rankings/players?limit=${limit}`, {
        next:{
            revalidate: 30
        }
    });
    return items
  } catch (error) {
    console.log(error.response);
    return error
    
  }
}

export async function getSinglePlayer (tag) {
    try {
        let {data} = await axiosInstance.get(`/players/${tag}`, {
            next:{
                revalidate: 30
            }
        });
        return data
      } catch (error) {
        console.log(error.response);
        return error
        
      }
}
