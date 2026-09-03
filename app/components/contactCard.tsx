interface ContactCardProps{
    email:string;
    phone:string;
    address:string;
    availability:string;
}

export default function ContactCard({
  email,
  phone,
  address,
  availability,
}: ContactCardProps) {
  return (
    <article className="mt-6 p-6 border-l-4 border-purple-600 bg-gray-50 rounded-lg shadow-md dark:bg-gray-800 dark:border-purple-400">
      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
        Contact Information
      </h3>

      <div className="space-y-2">
        <p className="text-lg text-gray-600 dark:text-gray-400">
          <strong>Email:</strong> {email}
        </p>

        <p className="text-lg text-gray-600 dark:text-gray-400">
          <strong>Phone:</strong> {phone}
        </p>

        <p className="text-lg text-gray-600 dark:text-gray-400">
          <strong>Address:</strong> {address}
        </p>

        <p className="text-lg text-gray-600 dark:text-gray-400">
          <strong>Availability:</strong> {availability}
        </p>
      </div>
    </article>
  );
}