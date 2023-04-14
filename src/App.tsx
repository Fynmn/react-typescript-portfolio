import contacts from './data/contacts'
import ContactCard from './components/ContactCard'

function App() {

  return (
    <>
      <div className="flex flex-col w-full bg-slate-600 min-h-screen">

        {/* Introduction Section */}
        <section className='bg-indigo-400'>
          <div className='max-w-7xl w-full mx-auto flex items-center justify-center h-[600px] '>
            <div className='flex'>
              <div className='flex flex-col items-center'>
                <h1 className='text-7xl font-bold text-slate-800 text-center'>Natalie Jane Pacificar</h1>
                <h1 className='mt-4 text-slate-600'>A simple portfolio website.</h1>
              </div>
            </div>
          </div>
        </section>


        {/* Portfolio Section */}
        <section className='bg-indigo-300'>
          <div className='max-w-7xl w-full mx-auto h-[800px]'>
            <div className='flex flex-col'>
              <h1 className='text-4xl font-medium text-slate-800 px-16 py-8'>Featured Projects</h1>
              <div className='px-16 py-8'>Projects here</div>
            </div>
          </div>
        </section>

        {/* Skills & Technologies Section */}
        <section className='bg-indigo-400'>
          <div className='max-w-7xl w-full mx-auto  h-[600px]'>
            <div className='flex flex-col'>
              <h1 className='text-4xl font-medium text-slate-800 px-16 py-8'>Skills & Technologies</h1>
              <div className='px-16 py-8'>Skills here</div>
            </div>
          </div>

        </section>

        {/* Contact*/}
        <section className='bg-indigo-300'>
          <div className='max-w-7xl w-full mx-auto  h-[400px]'>
            <div className='flex flex-col'>
              <h1 className='text-4xl font-medium text-slate-800 px-16 py-8'>Contact Me</h1>

              <h2 className='text-center text-2xl font-medium text-slate-500'>Send me a Message!</h2>
              <div className='px-16 py-8 flex flex-wrap gap-x-4 gap-y-4 justify-center'>

                {contacts.map((contact) => (
                  <ContactCard {...contact}></ContactCard>
                ))}

              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default App
