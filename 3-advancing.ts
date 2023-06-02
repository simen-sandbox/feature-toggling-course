const featureToggles = {
  v3: {
    enabled: true,
    users: ["user1", "user2"],
  },
};

export function makeToggles(userId: string, ipAddress: string) {
  return {
    isEnabled: (feature: string) => {
      if (featureToggles[feature]) {
        if (featureToggles[feature].enabled) {
          if (featureToggles[feature].users.includes(userId)) {
            return true;
          }

          if (featureToggles[feature].ipAddresses.includes(ipAddress)) {
            return true;
          }
        }
      }

      return false;
    },
  };
}

export async function main(): Promise<string> {
  const { isEnabled } = makeToggles("123", "8.8.8.8");
  // Fun server / command utility here

  if (isEnabled("v2")) {
    return "hello world";
  }

  if (isEnabled("v3")) {
    return "hello world v3";
  }

  return "hello";
}

console.log(await main());
