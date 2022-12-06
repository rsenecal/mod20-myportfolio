import HubspotForm from 'react-hubspot-form'

export default function Contact() {

    return(
        <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Me</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">If you're in search for a great developer with years of experience managing a remote team. </p>
        <form action="#" className="space-y-8">
        <HubspotForm
            portalId='517848'
            formId='db30b3f9-0c6e-4b7e-b3ed-8e02346977ad'
            onSubmit={() => console.log('Submit!')}
            onReady={(form) => console.log('Form ready!')}
            loading={<div>Loading...</div>}
            />

</form>
      </div>
        </section>

        )
}
