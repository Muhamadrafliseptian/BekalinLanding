export const openWhatsApp = (phoneNumber, message = "") => {
  const url = `https://api.whatsapp.com/send/?phone=6285183153813&text=Hi+ka%2C+Aku+bisa+dapet+info+lebih+lanjut+seputar+promo+nya%3F+%EF%BF%BD&type=phone_number&app_absent=0`;
  window.open(url, "_blank");
};
