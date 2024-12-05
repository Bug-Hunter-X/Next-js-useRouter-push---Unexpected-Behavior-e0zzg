```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = async () => {
    await router.push('/another-page');
    //Other actions can be put here without any issues
    console.log('Navigation complete');
  };

  return (
    <button onClick={handleClick}>Go to Another Page</button>
  );
}

export default MyComponent;```