import { fireEvent, render, screen } from '@testing-library/react';
import { Counter } from './Counter';
import user from '@testing-library/user-event';

// it('defaultCount = 0, then counter = 1', () => {
//   render(<Counter defaultCount={0} description='My Counter' />);
//   //This is recommended way.For readability purposes usually we just do this expect('This bit') to be in the document
//   expect(screen.getByText('Current Count: 0')).toBeInTheDocument();
//   //you can keep it like this
//   expect(screen.getByText(/my counter/i)).toBeInTheDocument();
// });

// it('defaultCount = 0, and + clicked then counter = 1', () => {
//   render(<Counter defaultCount={0} description='My Counter' />);
//   fireEvent.click(screen.getByRole('button', { name: 'Add to Counter' }));
//   // fireEvent.click(screen.getByRole('button', { name: '+' }));
//   expect(screen.getByText('Current Count: 1')).toBeInTheDocument();
// });

// it('defaultCount = 0, and - clicked then counter = -1', () => {
//   render(<Counter defaultCount={0} description='My Counter' />);
//   // fireEvent.click(screen.getByRole('button', { name: '-' }));
//   fireEvent.click(
//     screen.getByRole('button', { name: 'Subtract from Counter' })
//   );
//   expect(screen.getByText('Current Count: -1')).toBeInTheDocument();
// });

// // GROUPING(describe) - This is where we will do logical tests that are similar inside the same grouping

// describe('Counter', () => {
//   describe('initialized with defaultCount = 0 and description equals to My Counter', () => {
//     beforeEach(() => {
//       render(<Counter defaultCount={0} description='My Counter' />);
//     });

//     it('renders current Count: 0', () => {
//       expect(screen.getByText('Current Count: 0')).toBeInTheDocument();
//     });

//     it('renders title as "MyCounter"', () => {
//       expect(screen.getByText(/my counter/i)).toBeInTheDocument();
//     });

//     describe('when + is clicked', () => {
//       beforeEach(() => {
//         fireEvent.click(screen.getByRole('button', { name: 'Add to Counter' }));
//       });
//       it('Renders "Current counter: 1"', () => {
//         expect(screen.getByText('Current Count: 1')).toBeInTheDocument();
//       });
//     });

//     describe('when - is clicked', () => {
//       beforeEach(() => {
//         fireEvent.click(
//           screen.getByRole('button', { name: 'Subtract from Counter' })
//         );
//       });
//       it('Renders "Current counter: -1"', () => {
//         expect(screen.getByText('Current Count: -1')).toBeInTheDocument();
//       });
//     });
//   });
// });

//YOUTUBE
describe('Counter', () => {
  describe('initialized with defaultCount=10 and description="WWW"', () => {
    beforeEach(() => {
      render(<Counter defaultCount={10} description='WWW' />);
    });

    it('renders "Current Count: 10"', () => {
      expect(screen.getByText('Current Count: 10')).toBeInTheDocument();
    });

    it('renders title as "WWW"', () => {
      expect(screen.getByText(/WWW/)).toBeInTheDocument();
    });

    describe('when the incrementor changes to 5 and "+" button is clicked', () => {
      beforeEach(() => {
        user.type(screen.getByLabelText(/Incrementor/), '{selectall}5');
        user.click(screen.getByRole('button', { name: 'Add to Counter' }));
      });

      it('renders "Current Count: 15"', () => {
        expect(screen.getByText('Current Count: 15')).toBeInTheDocument();
      });

      describe('when the incrementor changes to empty string and "+" button is clicked', () => {
        beforeEach(() => {
          user.type(
            screen.getByLabelText(/Incrementor/),
            '{selectall}{delete}'
          );
          user.click(screen.getByRole('button', { name: 'Add to Counter' }));
        });

        it('renders "Current Count: 16"', () => {
          expect(screen.getByText('Current Count: 16')).toBeInTheDocument();
        });
      });
    });

    describe('when the incrementor changes to 25 and "-" button is clicked', () => {
      beforeEach(() => {
        user.type(screen.getByLabelText(/Incrementor/), '{selectall}25');
        user.click(
          screen.getByRole('button', { name: 'Subtract from Counter' })
        );
      });

      it('renders "Current Count: -15"', () => {
        expect(screen.getByText('Current Count: -15')).toBeInTheDocument();
      });
    });
  });

  describe('initialized with defaultCount=0 and description="My Counter"', () => {
    beforeEach(() => {
      render(<Counter defaultCount={0} description='My Counter' />);
    });

    it('renders "Current Count: 0"', () => {
      expect(screen.getByText('Current Count: 0')).toBeInTheDocument();
    });

    it('renders title as "MyCounter"', () => {
      expect(screen.getByText(/my counter/i)).toBeInTheDocument();
    });

    describe('when - is clicked', () => {
      beforeEach(() => {
        user.click(
          screen.getByRole('button', { name: 'Subtract from Counter' })
        );
      });

      it('renders "Current count: 1"', () => {
        expect(screen.getByText('Current Count: -1')).toBeInTheDocument();
      });
    });

    describe('when + is clicked', () => {
      beforeEach(() => {
        user.click(screen.getByRole('button', { name: 'Add to Counter' }));
      });

      it('renders "Current count: -1"', () => {
        expect(screen.getByText('Current Count: 1')).toBeInTheDocument();
      });
    });
  });
});

//TDD: Writing tests first
// describe('Counter', () => {
//   describe('initialized with defaultCount = 10 and description="WWW"', () => {
//     beforeEach(() => {
//       render(<Counter defaultCount={10} description='WWW' />);
//     });

//     it('renders current Count: 10', () => {
//       expect(screen.getByText('Current Count: 10')).toBeInTheDocument();
//     });

//     it('renders title as "WWW"', () => {
//       expect(screen.getByText(/WWW/)).toBeInTheDocument();
//     });
//     describe('when the incrementor changes to 5 and "+" button is clicked', () => {
//       beforeEach(() => {
//         user.type(screen.getByLabelText(/Incrementor/), '{selectall}5');
//         user.click(screen.getByRole('button', { name: 'Add to Counter' }));
//       });

//       it('renders "Current Count: 15"', () => {
//         expect(screen.getByText('Current Count: 15')).toBeInTheDocument();
//       });

//       describe('when the incrementor changes to empty string and "+" button is clicked', () => {
//         beforeEach(() => {
//           user.type(
//             screen.getByLabelText(/Incrementor/),
//             '{selectall}{delete}'
//           );
//           user.click(screen.getByRole('button', { name: 'Add to Counter' }));
//         });

//         it('renders "Current Count: 16"', () => {
//           expect(screen.getByText('Current Count: 16')).toBeInTheDocument();
//         });
//       });
//     });

// describe('when the increamentor changes to 5 and "+" button is clicked', () => {
//   beforeEach(() => {
//     user.type(screen.getByLabelText(/Incrementor/), '{selectall}5');
//     user.click(screen.getByRole('button', { name: 'Add to Counter' }));
//   });

//   it('render "Current Count: 15"', () => {
//     expect(screen.getByText('Current Count: 15')).toBeInTheDocument();
//   });
// });

// describe('when + is clicked', () => {
//   beforeEach(() => {
//     fireEvent.click(screen.getByRole('button', { name: 'Add to Counter' }));
//   });
//   it('Renders "Current counter: 1"', () => {
//     expect(screen.getByText('Current Count: 1')).toBeInTheDocument();
//   });
// });

// describe('when - is clicked', () => {
//   beforeEach(() => {
//     fireEvent.click(
//       screen.getByRole('button', { name: 'Subtract from Counter' })
//     );
//   });
//   it('Renders "Current counter: -1"', () => {
//     expect(screen.getByText('Current Count: -1')).toBeInTheDocument();
//   });
// });
//   });
// });
