import CustomButton from "@/components/button/CustomButton";
import Container from "@/components/container/Container";
import Image from "next/image";
import Link from "next/link";

export default function MainSection() {
  return (
    <div className="bg-background-300">
      <Container>
        <div className="mt-10 text-center md:mt-[50px] xl:flex justify-around">
          <div className="">
            <div>
              <h1 className="text-text-primary font-serif text-[30px] mb-10 md:text-[40px]">
                Адвокатський запит <br />–{" "}
                <span className="text-amber-gold font-serif text-[30px]">
                  {" "}
                  <br />
                  це гарантія отримання інформації
                </span>{" "}
              </h1>
              <div className="md:max-w-[500px] mx-auto flex flex-col items-center">
                <p className="text-text-secondary mb-10">Додайте головні переваги свого бізнесу, які роблять його унікальним та найкращим. Додайте текст, чому клієнти повинні обирати ваші товари або послуги та які переваги вони отримають після придбання товару. Напишіть власний текст, стилізуйте його та натисніть Готово.</p>
              </div>

              <Link href="/contacts">
                <CustomButton label="Контакти" onClick={() => {}} />
              </Link>
            </div>
            <div className="flex justify-center items-center my-8">
              <Image
                src="/icons/icon.png"
                alt="icon"
                width={50}
                height={60}
                priority // Використовуйте, якщо логотип важливий
              />
            </div>
            <div className="flex flex-col">
              <span className="text-amber-gold text-[30px] font-serif">7900</span>
              <span className="text-text-secondary font-senif">Успішних справ</span>
            </div>
          </div>

          <div className="flex justify-center items-center my-8 relative overflow-hidden sm:mx-auto sm:w-[350px] sm:h-[500px] xl:w-[450px] xl:h-[600px] xl:m-0">
            <Image src="/images/photo-min.jpg" alt="photo" width={375} height={450} priority className="rounded-3xl shadow-2xl" />
          </div>
        </div>
      </Container>
    </div>
  );
}
