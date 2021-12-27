import { GlobalVariables } from './../global-var/global-variables';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { LoginService } from '../services/login.service';
import { Location } from '@angular/common';
import { User } from '../models/user';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  name: string;
  email: string;
  phone: string;
  password: string;
 confirmpassword:string;
 photoUrl:string;
 confirmTerms:boolean;

 kvkk="İşbu Aydınlatma Metni, ……………………………….. Şirketi (“”Şirket”) tarafından Şirket’in müşterilerinin 6698 sayılı Kişisel Verilerin Korunması Kanunu (“Kanun”) kapsamında kişisel verilerinin Şirket tarafından işlenmesine ilişkin olarak aydınlatılması amacıyla hazırlanmıştır. Kişisel verilerinizin işbu Aydınlatma Metni kapsamında işlenmesine ilişkin detaylı bilgilere [www…………………….com] adresinde yer alan ……………………………..Şirketi Kişisel Verilerin Korunması ve İşlenmesi Politikası’ndan ulaşabilirsiniz.\n a) Kişisel Verilerin Elde Edilme Yöntemleri ve Hukuki Sebepleri\nKişisel verileriniz, elektronik veya fiziki ortamda toplanmaktadır. İşbu Aydınlatma Metni’nde belirtilen hukuki sebeplerle toplanan kişisel verileriniz Kanun’un 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları çerçevesinde işlenebilmekte ve paylaşılabilmektedir.\nb) Kişisel Verilerin İşleme Amaçları\nKişisel verileriniz, Kanun’un 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları çerçevesinde Şirket tarafından sunulan ürün ve hizmetlerin ilgili kişilerin beğeni, kullanım alışkanlıkları ve ihtiyaçlarına göre özelleştirilerek ilgili kişilere önerilmesi ve tanıtılması için gerekli olan aktivitelerin planlanması ve icrası, Şirket tarafından sunulan ürün ve hizmetlerden ilgili kişileri faydalandırmak için gerekli çalışmaların iş birimleri tarafından yapılması ve ilgili iş süreçlerinin yürütülmesi, Şirket tarafından yürütülen ticari faaliyetlerin gerçekleştirilmesi için ilgili iş birimleri tarafından gerekli çalışmaların yapılması ve buna bağlı iş süreçlerinin yürütülmesi, Şirket‘in ticari ve/veya iş stratejilerinin planlanması ve icrası ve Şirket‘in ve Şirket‘le iş ilişkisi içerisinde olan ilgili kişilerin hukuki, teknik ve ticari-iş güvenliğinin temini amaçlarıyla işlenmektedir.\nc) Kişisel Verilerin Paylaşılabileceği Taraflar ve Paylaşım Amaçları\nKişisel verileriniz, Kanun’un 8. ve 9. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları çerçevesinde, Şirket tarafından sunulan ürün ve hizmetlerin ilgili kişilerin beğeni, kullanım alışkanlıkları ve ihtiyaçlarına göre özelleştirilerek ilgili kişilere önerilmesi ve tanıtılması için gerekli olan aktivitelerin planlanması ve icrası, Şirket tarafından sunulan ürün ve hizmetlerden ilgili kişileri faydalandırmak için gerekli çalışmaların iş birimleri tarafından yapılması ve ilgili iş süreçlerinin yürütülmesi, Şirket tarafından yürütülen ticari faaliyetlerin gerçekleştirilmesi için ilgili iş birimleri tarafından gerekli çalışmaların yapılması ve buna bağlı iş süreçlerinin yürütülmesi, Şirket‘in ticari ve/veya iş stratejilerinin planlanması ve icrası ve Şirket‘in ve Şirket‘le iş ilişkisi içerisinde olan ilgili kişilerin hukuki, teknik ve ticari-iş güvenliğinin temini amaçları dahilinde Şirket’in iş ortakları ve tedarikçileri ile hukuken yetkili kurum ve kuruluşlar ile hukuken yetkili özel hukuk tüzel kişileriyle paylaşılabilecektir.\nd) Veri Sahiplerinin Hakları ve Bu Hakların Kullanılması\nKişisel veri sahipleri olarak aşağıda belirtilen haklarınıza ilişkin taleplerinizi Veri Sahipleri Tarafından Hakların Kullanılması başlığı altında belirtilen yöntemlerle Şirket’e iletmeniz durumunda talepleriniz Şirketimiz tarafından mümkün olan en kısa sürede ve her halde 30 (otuz) gün içerisinde değerlendirilerek sonuçlandırılacaktır.\nKanun’un 11. maddesi uyarınca kişisel veri sahibi olarak aşağıdaki haklara sahipsiniz:\nKişisel verilerinizin işlenip işlenmediğini öğrenme, Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme, Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme, Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme, Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme ve bu kapsamda yapılan işlemin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme, Kanun ve ilgili diğer kanun hükümlerine uygun olarak işlenmiş olmasına rağmen, işlenmesini gerektiren sebeplerin ortadan kalkması hâlinde kişisel verilerinizin silinmesini veya yok edilmesini isteme ve bu kapsamda yapılan işlemin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme, İşlenen verilerinizin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme, Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme. Kanun’un 28. maddesinin 2. fıkrası veri sahiplerinin talep hakkı bulunmayan halleri sıralamış olup bu kapsamda; Kişisel veri işlemenin suç işlenmesinin önlenmesi veya suç soruşturması için gerekli olması, İlgili kişinin kendisi tarafından alenileştirilmiş kişisel verilerin işlenmesi, Kişisel veri işlemenin kanunun verdiği yetkiye dayanılarak görevli ve yetkili kamu kurum ve kuruluşları ile kamu kurumu niteliğindeki meslek kuruluşlarınca, denetleme veya düzenleme görevlerinin yürütülmesi ile disiplin soruşturma veya kovuşturması için gerekli olması, Kişisel veri işlemenin bütçe, vergi ve mali konulara ilişkin olarak Devletin ekonomik ve mali çıkarlarının korunması için gerekli olması,hallerinde verilere yönelik olarak yukarıda belirlenen haklar kullanılamayacaktır.Kanun’un 28. maddesinin 1. fıkrasına göre ise aşağıdaki durumlarda veriler Kanun kapsamı dışında olacağından, veri sahiplerinin talepleri bu veriler bakımından da işleme alınmayacaktır:Kişisel verilerin, üçüncü kişilere verilmemek ve veri güvenliğine ilişkin yükümlülüklere uyulmak kaydıyla gerçek kişiler tarafından tamamen kendisiyle veya aynı konutta yaşayan aile fertleriyle ilgili faaliyetler kapsamında işlenmesi.Kişisel verilerin resmi istatistik ile anonim hâle getirilmek suretiyle araştırma, planlama ve istatistik gibi amaçlarla işlenmesi.Kişisel verilerin millî savunmayı, millî güvenliği, kamu güvenliğini, kamu düzenini, ekonomik güvenliği, özel hayatın gizliliğini veya kişilik haklarını ihlal etmemek ya da suç teşkil etmemek kaydıyla, sanat, tarih, edebiyat veya bilimsel amaçlarla ya da ifade özgürlüğü kapsamında işlenmesi.Kişisel verilerin millî savunmayı, millî güvenliği, kamu güvenliğini, kamu düzenini veya ekonomik güvenliği sağlamaya yönelik olarak kanunla görev ve yetki verilmiş kamu kurum ve kuruluşları tarafından yürütülen önleyici, koruyucu ve istihbari faaliyetler kapsamında işlenmesi.Kişisel verilerin soruşturma, kovuşturma, yargılama veya infaz işlemlerine ilişkin olarak yargı makamları veya infaz mercileri tarafından işlenmesi.Veri Sahipleri Tarafından Hakların Kullanılması\nVeri sahipleri, yukarıda bahsi geçen hakları kullanmak için [ww……………..………..com] linkinde yer alan “ Kişisel Veri Sahibi Tarafından Veri Sorumlusuna Yapılacak Başvurulara ilişkin Form ”u kullanabileceklerdir.Başvurular, ilgili veri sahibinin kimliğini tespit edecek belgelerle birlikte, aşağıdaki yöntemlerden biri ile gerçekleştirilecektir:Formun doldurularak ıslak imzalı kopyasının elden, noter aracılığı ile veya iadeli taahhütlü mektupla [………………………………………………………..-Türkiye] adresine iletilmesi,Formun 5070 sayılı Elektronik İmza Kanunu kapsamında düzenlenen güvenli elektronik imza ile imzalanarak [……………………..@hs02].kep.tr adresine kayıtlı elektronik posta ile gönderilmesi,Kişisel Verileri Koruma Kurulu tarafından öngörülen bir yöntemin izlenmesi.Şirket, Kanun’da öngörülmüş sınırlar çerçevesinde söz konusu hakları kullanmak isteyen veri sahiplerine, yine Kanun’da öngörülen şekilde azami otuz (30) gün içerisinde cevap vermektedir. Kişisel veri sahipleri adına üçüncü kişilerin başvuru talebinde bulunabilmesi için veri sahibi tarafından başvuruda bulunacak kişi adına noter kanalıyla düzenlenmiş özel vekâletname bulunmalıdır.Veri sahibi başvuruları kural olarak ücretsiz olarak işleme alınmakla birlikte, Kişisel Verileri Koruma Kurulu tarafından öngörülen ücret tarifesi[1] üzerinden ücretlendirme yapılabilecektir.Şirket, başvuruda bulunan kişinin kişisel veri sahibi olup olmadığını tespit etmek adına ilgili kişiden bilgi talep edebilir, başvuruda belirtilen hususları netleştirmek adına, kişisel veri sahibine başvurusu ile ilgili soru yöneltebilir."

 public form = [
  { val: 'Pepperoni', isChecked: true },
  { val: 'Sausage', isChecked: false },
  { val: 'Mushroom', isChecked: false }
];


 constructor(
    private afs: AngularFirestore,
    private afaut: AngularFireAuth,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastr: ToastController,
    private loginService: LoginService,
    private location: Location,
    private alertCtrl:AlertController,


  ) { }
  goBack(): void {
    this.location.back();

  }

  signTerms() {
     let alert = this.alertCtrl.create({
       header:'NETGER ŞİRKETİ KİŞİSEL VERİLERİN İŞLENMESİNE İLİŞKİN AYDINLATMA METNİ',
      message: this.kvkk,
      buttons: [
        {
          text: 'Hayır',
          role: 'cancel',
          handler: () => {
            this.confirmTerms=false;
            console.log('Hayıra tıklandı');
          }
        },
        {
          text: 'Evet',
          handler: () => {
            this.confirmTerms=true;
            console.log('Sözleşmeyi Kabul ettiniz')
            console.log('https://www.youtube.com/watch?v=I0ld-0OKBLM');
          }
        }
      ]
    }).then(res => {res.present();});
  }

  ionViewWillEnter(){
  this.signTerms()
  
}


  ngOnInit() { }



  async register() {

     if (this.name && this.email && this.phone && this.password &&this.confirmTerms ) {
      const loading = await this.loadingCtrl.create({
        message: 'Yükleniyor...',
        spinner: 'crescent',
        showBackdrop: true
      });

      loading.present();

      this.afaut.createUserWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          this.afs.collection('user').doc(data.user.uid).set({
            'userId': data.user.uid,
            'userName': this.name,
            'userEmail': this.email,
            'userPhone': this.phone,
            'createdAt': Date.now(),
          }).then(() => {
              loading.dismiss();
              this.toast('Kayıt başarılı lütfen e-postanızı kontrol edin!', 'success');
              this.router.navigate(['tabs/tab3']);
              GlobalVariables.log=false
            }) .catch(error => {
              loading.dismiss();
              this.toast(error.message, 'darger');
            })
        })
        
    }
    else {
      this.toast('Bilgileri tam  giriniz ve Aydınlatma metinin kabul ediniz', 'success');

    }
  }//end register

  checkPassword(){

  if(this.password== this.confirmpassword){
   
    this.toast('Şifreler Eşleşti', 'success');
  }
  else{
    this.toast('Şifreler Eşleşmiyor', 'success');

  }
}
  async toast(message, status) {
    const toast = await this.toastr.create({
      message: message,
      color: status,
      position: 'top',
      duration: 2000,
    });
    toast.present();
  }

}