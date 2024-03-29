import axios from "axios"

export const imageUplode = async image => {
    const formData = new FormData()
    formData.append('image', image)
    const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KYE}`, formData)
    return data
}