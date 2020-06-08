export const subscriptions = {
    usDiscovery: {
        displayName: `U.S. Discovery`,
        durations: {
            monthly: {
                monthCadence: {
                    renewal: 1,
                    payment: 1
                },
                price: {
                    currency: `$`,
                    amount: 24.99
                },
                offerIDs: {
                    freetrial: `O-25401`,
                    hardoffer: `O-25370`
                }
            },
            semiAnnual: {
                monthCadence: {
                    renewal: 6,
                    payment: 6
                },
                price: {
                    currency: `$`,
                    amount: 99
                },
                offerIDs: {
                    freetrial: `O-23590`,
                    hardoffer: `O-23589`
                }
            },
            semiAnnualBilledMonthly: {
                monthCadence: {
                    renewal: 6,
                    payment: 1
                },
                price: {
                    currency: `$`,
                    amount: 99
                },
                offerIDs: {
                    freetrial: `O-26374`,
                    hardoffer: `O-26373`
                }
            },
            annual: {
                monthCadence: {
                    renewal: 12,
                    payment: 12
                },
                price: {
                    currency: `$`,
                    amount: 189
                },
                offerIDs: {
                    freetrial: `O-23754`,
                    hardoffer: `O-23652`
                }
            },
            annualBilledMonthly: {
                monthCadence: {
                    renewal: 12,
                    payment: 1
                },
                price: {
                    currency: `$`,
                    amount: 189
                },
                offerIDs: {
                    freetrial: `O-26380`,
                    hardoffer: `O-263809`
                }
            }
        }
    },
    worldExplorer: {
        displayName: `World Explorer`,
        durations: {
            monthly: {
                monthCadence: {
                    renewal: 1,
                    payment: 1
                },
                price: {
                    currency: `$`,
                    amount: 39.99
                },
                offerIDs: {
                    freetrial: `O-25405`,
                    hardoffer: `O-25371`
                }
            },
            semiAnnual: {
                monthCadence: {
                    renewal: 6,
                    payment: 6
                },
                price: {
                    currency: `$`,
                    amount: 149
                },
                offerIDs: {
                    freetrial: `O-22056`,
                    hardoffer: `O-22054`
                }
            },
            semiAnnualBilledMonthly: {
                monthCadence: {
                    renewal: 6,
                    payment: 1
                },
                price: {
                    currency: `$`,
                    amount: 149
                },
                offerIDs: {
                    freetrial: `O-26376`,
                    hardoffer: `O-26375`
                }
            },
            annual: {
                monthCadence: {
                    renewal: 12,
                    payment: 12
                },
                price: {
                    currency: `$`,
                    amount: 289
                },
                offerIDs: {
                    freetrial: `O-23753`,
                    hardoffer: `O-23656`
                }
            },
            annualBilledMonthly: {
                monthCadence: {
                    renewal: 12,
                    payment: 1
                },
                price: {
                    currency: `$`,
                    amount: 189
                },
                offerIDs: {
                    freetrial: `O-26382`,
                    hardoffer: `O-26381`
                }
            }
        }
    },
    allAccess: {
        displayName: `All Access`,
        durations: {
            monthly: {
                monthCadence: {
                    renewal: 1,
                    payment: 1
                },
                price: {
                    currency: `$`,
                    amount: 49.99
                },
                offerIDs: {
                    freetrial: `O-25410`,
                    hardoffer: `O-25376`
                }
            },
            semiAnnual: {
                monthCadence: {
                    renewal: 6,
                    payment: 6
                },
                price: {
                    currency: `$`,
                    amount: 199
                },
                offerIDs: {
                    freetrial: `O-24567`,
                    hardoffer: `O-24566`
                }
            },
            semiAnnualBilledMonthly: {
                monthCadence: {
                    renewal: 6,
                    payment: 1
                },
                price: {
                    currency: `$`,
                    amount: 199
                },
                offerIDs: {
                    freetrial: `O-26378`,
                    hardoffer: `O-26377`
                }
            },
            annual: {
                monthCadence: {
                    renewal: 12,
                    payment: 12
                },
                price: {
                    currency: `$`,
                    amount: 389
                },
                offerIDs: {
                    freetrial: `O-24570`,
                    hardoffer: `O-24569`
                }
            },
            annualBilledMonthly: {
                monthCadence: {
                    renewal: 12,
                    payment: 1
                },
                price: {
                    currency: `$`,
                    amount: 389
                },
                offerIDs: {
                    freetrial: `O-26384`,
                    hardoffer: `O-26383`
                }
            }
        }
    }
}

// Various pricing comparisons & savings text
Object.keys(subscriptions).forEach((subscription) => {
    const monthlyObj = subscriptions[subscription].durations.monthly;
    Object.keys(subscriptions[subscription].durations).forEach((duration) => {
        if (duration !== `monthly`) {
            const packageObj = subscriptions[subscription].durations[duration];
            // Set Savings Text
            const saveFromMonthlyActual = (monthlyObj.price.amount * packageObj.monthCadence.renewal) - packageObj.price.amount;
            packageObj.save = {
                actual: saveFromMonthlyActual,
                display: Math.floor(saveFromMonthlyActual)
            }
            // Set Monthly Equivalent Pricing
            packageObj.price.mothlyEquivalentAmount = (packageObj.price.amount / packageObj.monthCadence.renewal).toFixed(2);
        } 
    })
})

export default subscriptions;