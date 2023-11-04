import { GetStaticProps, NextPage } from "next";
import React from "react";


// export interface ContactPageProps {
//   title: string;
//   first_content_block: string;
//   second_content_block: string;
//   address: string;
//   city: string;
//   postal_code: string;
//   phone: string;
// }

// interface Props {
//   data: ContactPageProps;
// }

// const Contact: NextPage<Props> = ({ data }) => {
//   return (
//     <div>
//       <PageTitle title={data.title} content={data.first_content_block} />
//       <ContactPage {...data} />
//     </div>
//   );
// };

// export default Contact;

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch("http://localhost:5001/contact_page");
//   const data: ContactPageProps = await res.json();

//   return {
//     props: {
//       data: data,
//     },
//   };
// };
