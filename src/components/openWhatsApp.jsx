export const openWhatsApp = (phoneNumber, message = "") => {
  const url = `https://api.whatsapp.com/send/?phone=6285117485175&text=Bekelin+Hari+Ini+Yuk%21&type=phone_number&app_absent=0`;
  window.open(url, "_blank");
};
