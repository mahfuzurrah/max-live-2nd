export interface CtaContentProps {}

export function CtaContent(props: CtaContentProps) {
  const {} = props;

  return (
    <div className="text-center lg:text-left lg:max-w-xl">
      <h3 className="h3 text-white mb-2">Plus d'informations?</h3>
      <p className="text-gray-300 text-lg mb-6">Abonnez-vous à la Newsletter</p>

      {/* CTA form */}
      <form className="w-full lg:w-auto">
        <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
          <input
            type="email"
            className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500"
            placeholder="Votre email…"
            aria-label="Votre email…"
          />
          <a
            title="subscribe"
            className="btn text-white bg-blue-600 hover:bg-blue-700 shadow"
            href="#0"
          >
            S'abonner
          </a>
        </div>
        {/* Success message */}
        {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
        <p className="text-sm text-gray-400 mt-3">
          Pas de spam. Vous pouvez vous désabonner à tout moment.
        </p>
      </form>
    </div>
  );
}
