function undrconstrc() {
  Swal.fire({
    title: "Under Construct",
    text: "masih dalam tahap pengerjaan qaqa",
    imageUrl: "/img/shy.gif",
    imageHeight: 150,
    imageWidth: 150,
    backdrop: `
    rgba(0,0,123,0.4)
    url("/img/cat.gif")
    left top
    no-repeat
  `,
  });
}

function btnTiktok(){
  swal.fire({
    backdrop: `
    rgba(0,0,123,0.4)
    url("/img/cat.gif")
    left top
    no-repeat
  `,
    title:"Open <b>TikTok</b>",
    icon:"question",
    confirmButtonText:"Yes",
    confirmButtonColor: "#00c04b",
    showCancelButton: true,
    cancelButtonText:"No",
    cancelButtonColor:"#fb3b1e"
  }).then((result) => {
    if(result.isConfirmed){
      open("https://www.tiktok.com/@.ryuzu")
    }else if(result.isDismissed){
      const Toast = Swal.mixin({
        toast: true,
        position:"top-end",
        timer: 1500,
        timerProgressBar: false,
        showConfirmButton: false,
      })

      Toast.fire({
        icon: "error",
        title:"Canceled",
      })
    }
  })
}

function btnInstagram(){
  
  swal.fire({
    backdrop: `
    rgba(0,0,123,0.4)
    url("/img/cat.gif")
    left top
    no-repeat
  `,
    title:"Open <b>Instagram</b>",
    icon:"question",
    confirmButtonText:"Yes",
    confirmButtonColor: "#00c04b",
    showCancelButton: true,
    cancelButtonText:"No",
    cancelButtonColor:"#fb3b1e"
  }).then((result) => {
    if(result.isConfirmed){
      open("https://www.instagram.com/ryuzu.21/")
    }else if(result.isDismissed){
      const Toast = Swal.mixin({
        toast: true,
        position:"top-end",
        timer: 1500,
        timerProgressBar: false,
        showConfirmButton: false,
      })

      Toast.fire({
        icon: "error",
        title:"Canceled",
      })
    }
  })

}