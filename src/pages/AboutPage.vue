<template>
  <div>
    <company-section></company-section>

    <employee-section id="first-employee" type="img-right">
      <template #text>
        <h2>Martyna Cieślicka</h2>
        <h3>Magister kosmetologii</h3>
        <h4>Skóry trądzikowe</h4>
        <article>
          Jestem prawdziwą pasjonatką kosmetologii holistycznej i moim celem
          jest pomaganie ludziom w osiaganiu harmonii i piękna, zarówno na
          zewnatrz, jak i wewnątrz. W moim gabinecie, MC Kosmetologia
          profesjonalna, klienci mogą doświadczyć profesjonalizmu, troski i
          kompleksowej opieki nad swoją skórą i ogólnym samopoczuciem.
        </article>
      </template>
      <template #image>
        <img src="../assets/images/persons/home-employee-1.jpg" />
      </template>
    </employee-section>
    <employee-section id="second-employee" type="img-left">
      <template #text>
        <h2>Julia Bugała</h2>
        <h3>Studentka kosmetologii</h3>
        <h4>Manicure</h4>
        <article>
          Jestem studentką kosmetologii, która kocha sztukę dbania o paznokcie.
          Moja pasja to czysty i schludny manicure oraz naturalne stylizacje
          paznokci. Uwielbiam eksperymentować z różnymi kolorami i formami,
          dążąc do piękna, które podkreśla Wasze naturalne piękno. Zapraszam Cię
          do odkrywania razem ze mną świata pięknych paznokci i zdrowej
          pielęgnacji dłoni!
        </article>
      </template>
      <template #image>
        <img src="../assets/images/persons/home-employee-1.jpg" />
      </template>
    </employee-section>
    <employee-section id="third-employee" type="img-right">
      <template #text>
        <h2>Sandra Mikołajczyk</h2>
        <h3>Stylistka brwi i rzęs</h3>
        <h4>Fanka naturalnych stylizacji</h4>
        <article>
          Jestem stylistką brwi i rzęs, a moją pasją jest podkreślanie
          naturalnego piękna. Uwielbiam tworzyć delikatne i subtelne stylizacje
          brwi oraz rzęs, które wydobywają naturalne piękno każdej osoby. Moja
          misja to sprawić, aby każda klientka czuła się piękna i pewna siebie,
          zachowując jednocześnie autentyczność. Zapraszam Cię do mojego świata,
          gdzie naturalność i elegancja spotykają się w harmonii.
        </article>
      </template>
      <template #image>
        <img src="../assets/images/persons/home-employee-1.jpg" />
      </template>
    </employee-section>
  </div>
</template>

<script>
import CompanySection from "../components/layout/about/CompanySection.vue";
import EmployeeSection from "../components/layout/about/EmployeeSection.vue";

export default {
  components: {
    CompanySection,
    EmployeeSection,
  },
};
</script>

<style lang="scss" scoped></style>
